import React, { Component } from 'react';
import html from './html';

/**
 * 目标：给一段 html 字符串，将指定内容（特殊的标签或者 class）替换成 React 组件。
 * 思路1：
 * 1、先用 dangerouslySetInnerHTML 渲染父节点，之后分析其中的所有子节点信息生成一个 tree。（这一步使用正则解析会更好？）
 * 2、使用 React.createElement 重新渲染，遇到指定内容特殊处理。
 * 思路2：
 * 1、直接渲染需要替换的组件，拿到 dom 之后 replace。
 */
function whatToRender(element) {
    return <div style={{ background: 'orange' }}>{ element }</div>
}

class htmlRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderTarget: <div>target</div>
        };
    }

    componentDidMount() {
        const root = window.temp = document.querySelector('.render-source');
        const tree = this.parseNode(root);
        this.renderTree(tree);
    }

    parseNode = (node) => {
        const children = node.childNodes;
        const obj = this.getAttrsObject(node);
        if (children.length) {
            obj.children = Array.from(children).map(this.parseNode);
        }
        return obj;
    }

    getAttrsObject = (node) => {
        // textNode
        if (!node.tagName) {
            return ({ text: node.nodeValue });
        }
        return node.getAttributeNames().reduce((obj, attr) => {
            if (attr === 'class') {
                obj.attrs.className = node.getAttribute(attr);
            } else if (attr === 'style') {
                obj.attrs[attr] = {}
            } else {
                obj.attrs[attr] = node.getAttribute(attr);
            }
            return obj;
        }, { tagName: node.tagName.toLowerCase(), attrs: {} });
    }

    renderTree = (tree) => {
        this.setState({
            renderTarget: this.renderNode(tree)
        });
    }

    renderNode = (node) => {
        if (!node.tagName) return node.text;
        return React.createElement(node.tagName, node.attrs, node.children && node.children.map(this.renderNode));
    }

    render() {
        return (
            <>
                <div style={{ display: 'none' }}>
                    <div dangerouslySetInnerHTML={{ __html: html }} className="render-source"></div>
                </div>
                { this.state.renderTarget }
            </>
        );
    }
}
  
export default htmlRender;
