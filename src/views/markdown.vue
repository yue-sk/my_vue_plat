<!--
 * @Author: zhongyue3 zhongyue3@staff.weibo.com
 * @Date: 2024-01-04 16:33:25
 * @LastEditors: zhongyue3 zhongyue3@staff.weibo.com
 * @LastEditTime: 2024-01-04 16:33:32
 * @FilePath: /my_vue_plat/src/views/markdown.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="container">
		<div class="plugins-tips">
			md-editor-v3：vue3版本的 markdown 编辑器，配置丰富，请详看文档。 访问地址：
			<a href="https://imzbf.github.io/md-editor-v3/index" target="_blank">md-editor-v3</a>
		</div>
		<md-editor class="mgb20" v-model="text" @on-upload-img="onUploadImg" />
		<el-button type="primary">提交</el-button>
	</div>
</template>

<script setup lang="ts" name="md">
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
const onUploadImg = (files: any) => {
	console.log(files);
};
</script>