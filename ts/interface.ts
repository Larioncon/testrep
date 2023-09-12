interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '280899',
  size: {
    width: 20,
    height: 35,

  },
  color: 'red'
}

const rect2: Rect = {
  id: '280801',
  size: {
    width:  12,
    height: 6,
  }
}

rect2.color = 'black'

const rect3 = {} as Rect 
const rect4 = <Rect>{} 

interface RectWithArea extends Rect {
  getArea: () => number 
}

const rect5: RectWithArea = {
  id: '2888',
  size: {
    width: 123,
    height: 12,
  },
  getArea(): number {
    return this.size.width + this.size.height 
  }
}

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date =  new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//
interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}