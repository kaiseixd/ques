import React, { Component } from 'react';

const html = `<div class="article___2H6vq"><article id="content" class="article-content" tabindex="0" style="outline-style: none;"><div class="header___O32EY"><div class="title___3ntsK"><h1 id="article-title" class="articleTitle___3zWrP">冻结对象</h1></div></div><div class="content___2v1LS"><div class="yuque-doc-content" data-df="lake" style="position: relative;"><div class="lake-engine-view" tabindex="0"><h3 id="d994d598"><a class="lake-anchor" href="#d994d598"></a>目的</h3><p>保证对外暴露的对象完全安全，不能被业务代码所改写覆盖或下钩子（hook）函数。</p><p><br></p><h3 id="fa6e315b"><a class="lake-anchor" href="#fa6e315b"></a>属性配置符configurable</h3><p>表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。</p><p><br></p><h3 id="preventExtensions"><a class="lake-anchor" href="#preventExtensions"></a>preventExtensions</h3><ul><li>Object.isExtensible</li><li>Object.preventExtensions<br>
让一个对象变得不可扩展。<br>
几个注意点包括但不限于：</li><li>不可扩展的对象的属性通常仍然可以被删除。</li><li>尝试给一个不可扩展对象添加新属性的操作将会失败，不过可能是静默失败，也可能会抛出 TypeError 异常（严格模式下）。</li><li>Object.preventExtensions 只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性。</li></ul><p><br></p><h3 id="seal"><a class="lake-anchor" href="#seal"></a>seal</h3><ul><li>Object.isSealed</li><li>Object.seal<br>
密封一个对象（将 configurable 设置为 false）。<br>
更改属性属于 writable。</li></ul><p><br></p><h3 id="frozen"><a class="lake-anchor" href="#frozen"></a>frozen</h3><ul><li>Object.isFrozen</li><li>Object.freeze<br>
将 configurable 和 writable 均设置为 false。但是只是浅冻结，对内部的对象不会有影响，如果没有环的话可以递归冻结。</li></ul><p><br></p><div data-card-type="block" data-lake-card="codeblock" contenteditable="false" data-card-value="data:%7B%22id%22%3A%222f7ba791%22%2C%22mode%22%3A%22javascript%22%2C%22code%22%3A%22Object.prototype.deepFreeze%20%3D%20Object.prototype.deepFreeze%20%7C%7C%20function%20(o)%7B%5Cn%20%20%20%20var%20prop%2C%20propKey%3B%5Cn%20%20%20%20Object.freeze(o)%3B%20%2F%2F%20%E9%A6%96%E5%85%88%E5%86%BB%E7%BB%93%E7%AC%AC%E4%B8%80%E5%B1%82%E5%AF%B9%E8%B1%A1%5Cn%20%20%20%20for%20(propKey%20in%20o)%7B%5Cn%20%20%20%20%20%20%20%20prop%20%3D%20o%5BpropKey%5D%3B%5Cn%20%20%20%20%20%20%20%20if(!o.hasOwnProperty(propKey)%20%7C%7C%20!(typeof%20prop%20%3D%3D%3D%20%5C%22object%5C%22)%20%7C%7C%20Object.isFrozen(prop))%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20continue%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20deepFreeze(prop)%3B%20%2F%2F%20%E9%80%92%E5%BD%92%5Cn%20%20%20%20%7D%5Cn%7D%22%7D" id="2f7ba791"><div data-card-element="body"><div data-card-element="center"><div class="lake-codeblock lake-codeblock-javascript">
    
    <div class="lake-codeblock-content"><div class="CodeMirror"><pre class="cm-s-default"><span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">deepFreeze</span> <span class="cm-operator">=</span> <span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">deepFreeze</span> <span class="cm-operator">|</span><span class="cm-operator">|</span> <span class="cm-keyword">function</span> (<span class="cm-def">o</span>){
    <span class="cm-keyword">var</span> <span class="cm-def">prop</span>, <span class="cm-def">propKey</span>;
    <span class="cm-variable">Object</span>.<span class="cm-property">freeze</span>(<span class="cm-variable-2">o</span>); <span class="cm-comment">// 首先冻结第一层对象</span>
    <span class="cm-keyword">for</span> (<span class="cm-variable-2">propKey</span> <span class="cm-keyword">in</span> <span class="cm-variable-2">o</span>){
        <span class="cm-variable-2">prop</span> <span class="cm-operator">=</span> <span class="cm-variable-2">o</span>[<span class="cm-variable-2">propKey</span>];
        <span class="cm-keyword">if</span>(<span class="cm-operator">!</span><span class="cm-variable-2">o</span>.<span class="cm-property">hasOwnProperty</span>(<span class="cm-variable-2">propKey</span>) <span class="cm-operator">|</span><span class="cm-operator">|</span> <span class="cm-operator">!</span>(<span class="cm-keyword">typeof</span> <span class="cm-variable-2">prop</span> <span class="cm-operator">===</span> <span class="cm-string">"object"</span>) <span class="cm-operator">|</span><span class="cm-operator">|</span> <span class="cm-variable">Object</span>.<span class="cm-property">isFrozen</span>(<span class="cm-variable-2">prop</span>)){
            <span class="cm-keyword">continue</span>;
        }
        <span class="cm-variable">deepFreeze</span>(<span class="cm-variable-2">prop</span>); <span class="cm-comment">// 递归</span>
    }
}</pre></div></div>
  </div></div></div></div><p><br></p><h3 id="d17a0f0b"><a class="lake-anchor" href="#d17a0f0b"></a>参考<span data-lake-element="cursor"></span></h3><ul><li><a href="https://zhuanlan.zhihu.com/p/27273811" target="_blank" rel="noopener noreferrer">JS冻结对象的《人间词话》 完美实现究竟有几层境界？</a></li></ul></div></div></div><div class="reward___3M6_P" style="user-select: none;"><div class="lark-like lark-like-vertical"><p class="lark-like-doc-tip"><span>若有收获，就赏束稻谷吧</span></p><div class="lark-like-btn-wrap"><div class="lark-like-btn lark-like-btn-inanimate"><span class="lark-like-icon"></span><span class="lark-like-circle"></span><span class="lark-like-sparks"><span class="lark-like-spark lark-like-spark-1"></span><span class="lark-like-spark lark-like-spark-2"></span><span class="lark-like-spark lark-like-spark-3"></span><span class="lark-like-spark lark-like-spark-4"></span><span class="lark-like-spark lark-like-spark-5"></span><span class="lark-like-spark lark-like-spark-6"></span><span class="lark-like-spark lark-like-spark-7"></span></span></div></div><span class="lark-like-count"><span>0</span> 颗稻谷</span></div></div></article><div class="meta___ZMU93"><div style="user-select: none;"><div class="wrapper___2k3mA"><div class="meta-left"><div class="meta-item"><span class="author larkicon larkicon-user"></span><span class="doc-contributors"><span><a href="/kaisei">kaisei</a></span></span></div><div class="meta-item"><span><span class="larkicon larkicon-clock"></span><span class="item-text"><span>08-11 21:24</span></span></span></div><div class="meta-item"><span><span class="larkicon larkicon-read"></span><span class="item-text">0</span></span></div><div class="meta-item"><span><span class="larkicon larkicon-comments"></span><span class="item-text">0</span></span></div></div><div class="meta-right"></div></div></div></div><div style="user-select: none;"><div class="wrapper___8HhiZ"><div class="prev___2peF9"><a href="/kaisei/pkragg/ob5oec" class="pager___2Ys93"><div class="label___2_MgD"><i aria-label="图标: left" class="anticon anticon-left labelIcon___2oR-8"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></i><span>上一篇</span></div><h6 class="title___3X_vo">异步</h6></a></div><div class="next___W6ZdR"><a href="/kaisei/pkragg/iwuttx" class="pager___2Ys93"><div class="label___2_MgD"><span>下一篇</span><i aria-label="图标: right" class="anticon anticon-right labelIcon___2oR-8"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></div><h6 class="title___3X_vo">event loop</h6></a></div></div></div></div>`

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
