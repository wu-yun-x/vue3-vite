/**
 * 将树结构数据扁平化处理。
 * @param {Array} tree 原始树
 * @param {string} childrenKey 子节点的键名
 * @returns {Array} 返回扁平化的数组
 */
export function flattenTree(tree, childrenKey = 'children') {
  const result = []

  // 遍历树结构的递归函数
  function traverse(arr) {
    arr.forEach(item => {
      const { [childrenKey]: children, ...data } = item // 解构分离
      result.push(data)
      if (children && children.length) {
        traverse(children)
      }
    })
  }

  traverse(tree)

  return result
}

/**
 * 清洗tree，提取有效字段
 * @param {Array} tree 原始树
 * @param {Function} callback 节点数据处理回调
 * @param {String} childrenKey 子节点原始key值
 * @param {String} newChildrenKey 子节点新key值
 * @returns {Array} 清洗后的树
 */
export function cleanTree(tree, callback, childrenKey = 'children', newChildrenKey = 'children') {
  const traverse = tree => {
    const result = []
    tree.forEach(node => {
      const { [childrenKey]: children, ...item } = node
      const newNode = callback(item)
      if (children && children.length) {
        newNode[newChildrenKey] = traverse(children)
      }
      result.push(newNode)
    })
    return result
  }

  return traverse(tree)
}
