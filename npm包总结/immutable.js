/*
    1.什么是Immutable❓
        持久化数据结构,对Immutable做任何修改都不会改变原先的数据,而是返回一个新的Immutable对象。
    2.为什么用Immutable❓
        传统的劣势👉：采用deepCopy的方式会递归把所有节点都复制一遍.
        Immuutable的优势👉：对比节点,只修改受影响的节点和它的父节点,其它节点则进行共享。
*/