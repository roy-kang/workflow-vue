/**
 * Description: 计算连线数据
 * Created Date: 2022-04-05 18:10:01
 * Author: Kang Dong
 */

import WF from './type'

export const calcLineData = (componentList: WF.ComponentType[]) => {
  const lines: Record<string, any>[] = []
  const hashComponents = changeArray2Obj(componentList)
  componentList.forEach((component: WF.ComponentType) => {
    if (!component.next.length) {
      return
    }
    component.next.forEach((next: WF.Next) => {
      const targetComponent = hashComponents[next.targetComponentId]
      const start = getComponentPosition(component, next.directionStart)
      const dest = getComponentPosition(targetComponent, next.directionEnd)
      if (start && dest) {
        lines.push({
          startx: start[0],
          starty: start[1],
          startDire: next.directionStart,
          destx: dest[0],
          desty: dest[1],
          destDire: next.directionEnd,
          w: component.attr.w,
          h: component.attr.h,
          dw: targetComponent.attr.w,
          dh: targetComponent.attr.h,
          type: next.lineType,
          id: next.id,
          displayName: next.displayName,
          props: next.props
        })
      }
    })
  })
  return lines
}

// 组件列表转换 hash
const changeArray2Obj = (componentList: WF.ComponentType[]) => {
  const result: Record<string, WF.ComponentType> = {}
  componentList.forEach((c: WF.ComponentType) => {
    result[c.id] = c
  })
  return result
}

// 获取组件不同方向对应的坐标值
export const getComponentPosition = (component: WF.ComponentType, direction: WF.Direction) => {
  if (!component) {
    return
  }
  const { x, y, w, h } = component.attr

  if (direction === 'up') {
    return [x + w / 2, y]
  }

  if (direction === 'down') {
    return [x + w / 2, y + h]
  }

  if (direction === 'left') {
    return [x, y + h / 2]
  }

  if (direction === 'right') {
    return [x + w, y + h / 2]
  }

  return [0, 0]
}
