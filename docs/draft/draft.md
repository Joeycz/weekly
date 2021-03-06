### 第三十八期（2019.11.01）

1. 保持Node.js的快速：高性能Node.js服务器的工具，技术和技巧汇总

	[https://www.smashingmagazine.com/2018/06/nodejs-tools-techniques-performance-servers/](https://www.smashingmagazine.com/2018/06/nodejs-tools-techniques-performance-servers/)

	![20191024164255.png](https://raw.githubusercontent.com/Joeycz/pics/master/20191024164255.png)

2. 共享可变状态问题，通常是引用类型拷贝的问题，涉及深浅拷贝的问题

	[https://2ality.com/2019/10/shared-mutable-state.html](https://2ality.com/2019/10/shared-mutable-state.html)

	```js
	// 请注意，deepCopy()仅解决了扩展的一个问题：浅复制。其他所有内容：不复制原型，仅部分复制特殊对象，忽略不可枚举的属性，忽略大多数属性。
	// 通常，不可能完全实现复制：并非所有数据都是一棵树，有时您并不需要所有属性，等等。
	function deepCopy(original) {
		if (Array.isArray(original)) {
			return original.map(elem => deepCopy(elem));
		} else if (typeof original === 'object' && original !== null) {
			return Object.fromEntries(
				Object.entries(original)
					.map(([k, v]) => [k, deepCopy(v)]));
		} else {
			// Primitive value: atomic, no need to copy
			return original;
		}
	}
	```

3. Peaks.js是一个JavaScript组件，允许用户在浏览器中查看音频波形并与之交互。

	[https://waveform.prototyping.bbc.co.uk/](https://waveform.prototyping.bbc.co.uk/)

	![20191030183252.png](https://raw.githubusercontent.com/Joeycz/pics/master/20191030183252.png)

4. μPlot，μPlot是基于Canvas 2D的快速，高效内存的时间序列图；从冷启动开始，150,000个数据点创建一个交互式图表只需要40ms。除了快速的初始渲染外，缩放和光标性能是所有类似制图库中最好的。它的大小约为10 KB，可能是最小且最快的时间序列绘图仪，没有使用WebGL着色器或WASM，这两种绘图仪的启动成本和代码大小都高得多。

	[https://github.com/leeoniya/uPlot](https://github.com/leeoniya/uPlot)

5. mermaid：以类似 markdown 的文本生成图表和流程图的方。

	[https://github.com/knsv/mermaid](https://github.com/knsv/mermaid)

6. mitt：一个事件订阅和发射器的 javascript 库，Mitt 是为浏览器设计的，但是可以在任何JavaScript运行时中使用。它没有依赖项，并支持IE9+。

	[https://github.com/developit/mitt](https://github.com/developit/mitt)

7. Nzh 适用于需要转换阿拉伯数字与中文数字的场景。

	[https://github.com/cnwhy/nzh](https://github.com/cnwhy/nzh)

8. SandDance：微软开源的数据可视化库，SandDance使用单元可视化，在数据库中的行与屏幕上的标记之间应用一对一映射。视图之间保持平滑无缝的切换，使数据可视化更加的炫酷和未来感。

	[https://github.com/microsoft/SandDance](https://github.com/microsoft/SandDance)

	![](https://user-images.githubusercontent.com/11507384/54236654-52d42800-44d1-11e9-859e-6c5d297a46d2.gif)