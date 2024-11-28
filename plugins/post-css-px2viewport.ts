import { Plugin } from 'postcss';

const defaultViewport = {
    width: 375,
}
type ViewPort = typeof defaultViewport;

/**
 * 这是一个PostCSS插件，用于将px单位转换为vw单位
 * @param options - 选项对象，包含视口宽度
 * @returns 一个PostCSS插件
 */
export const PostCssPx2ViewPort = (options?: ViewPort): Plugin => {

    // 合并默认视口宽度和用户提供的选项
    const opts = Object.assign({}, defaultViewport, options);
    return {
        // 插件名称
        postcssPlugin: 'postcss-px2viewport',
        // 处理声明
        Declaration(node) {
            // 如果值包含xm ，则转换为vw
            if (node.value.includes('xm')) {
                node.value = `${(parseFloat(node.value) / opts.width * 100).toFixed(2)}vw`;
            }
        }
    }
}