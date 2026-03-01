import type { Root } from 'mdast'
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx'
import type { AsideType } from './constants'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import { ASIDE_TYPES } from './constants'

export function remarkAsides() {
	return (tree: Root) => {
		visit(tree, (node, nodeIndex, parent) => {
			if (!parent || nodeIndex === undefined || node.type !== 'containerDirective') {
				return
			}

			if (!ASIDE_TYPES.includes(node.name as AsideType))
				return

			const asideType = node.name as AsideType
			let title: string = ''

			const firstChild = node.children[0]
			if (firstChild?.type === 'paragraph' && firstChild.data && 'directiveLabel' in firstChild.data && firstChild.children.length > 0) {
				title = toString(firstChild.children).trim()
				node.children.splice(0, 1)
			}

			const attributes: MdxJsxFlowElement['attributes'] = [
				{
					type: 'mdxJsxAttribute',
					name: 'type',
					value: asideType,
				},
				{
					type: 'mdxJsxAttribute',
					name: 'title',
					value: title,
				},
			]

			parent.children.splice(nodeIndex, 1, {
				type: 'mdxJsxFlowElement',
				name: 'Aside',
				attributes,
				children: node.children,
			})
		})
	}
}
