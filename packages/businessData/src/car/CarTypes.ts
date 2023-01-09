export enum CarTypes {
  CAR_ASSEMBLY = 'CAR ASSEMBLY',
  CAR = 'CAR',
  CAR_PARTS = 'CAR PARTS',
  BODY = 'BODY',
  BODY_PARTS = 'BODY PARTS',
  ROOF = 'ROOF',
  LEFT_FRONT_DOOR = 'LEFT FRONT DOOR',
  BONNET = 'BONNET',
  POWER_TRAIN = 'POWER TRAIN',
  POWER_TRAIN_PARTS = 'POWER TRAIN PARTS',
  ENGINE = 'ENGINE',
  ENGINE_PARTS = 'ENGINE PARTS',
  CYLINDER_HEAD = 'CYLINDER HEAD',
  CYLINDER = 'CYLINDER',
  CARTER = 'CARTER',
  COUPLING = 'COUPLING',
  GEAR_BOX = 'GEAR BOX',
  REAR_AXLE = 'REAR AXLE',
  REAR_AXLE_PARTS = 'REAR AXLE PARTS',
  LEFT_REAR_WHEEL = 'LEFT REAR WHEEL',
  RIGHT_REAR_WHEEL = 'RIGHT REAR WHEEL'
}

export function carTypeMap(type: CarTypes): CarTypes[] {
  const out: CarTypes[] = []
  switch (type) {
    case CarTypes.CAR_ASSEMBLY:
      out.push(CarTypes.CAR)
      break
    case CarTypes.CAR:
      out.push(CarTypes.CAR_PARTS)
      break
    case CarTypes.CAR_PARTS:
      out.push(CarTypes.BODY, CarTypes.POWER_TRAIN)
      break
    case CarTypes.BODY:
      out.push(CarTypes.BODY_PARTS)
      break
    case CarTypes.BODY_PARTS:
      out.push(CarTypes.ROOF, CarTypes.LEFT_FRONT_DOOR, CarTypes.BONNET)
      break
    case CarTypes.POWER_TRAIN:
      out.push(CarTypes.POWER_TRAIN_PARTS)
      break
    case CarTypes.POWER_TRAIN_PARTS:
      out.push(
        CarTypes.ENGINE,
        CarTypes.COUPLING,
        CarTypes.GEAR_BOX,
        CarTypes.REAR_AXLE
      )
      break
    case CarTypes.ENGINE:
      out.push(CarTypes.ENGINE_PARTS)
      break
    case CarTypes.ENGINE_PARTS:
      out.push(CarTypes.CYLINDER_HEAD, CarTypes.CYLINDER, CarTypes.CARTER)
      break
    case CarTypes.REAR_AXLE:
      out.push(CarTypes.REAR_AXLE_PARTS)
      break
    case CarTypes.REAR_AXLE_PARTS:
      out.push(CarTypes.LEFT_REAR_WHEEL, CarTypes.RIGHT_REAR_WHEEL)
      break
    default:
      break
  }
  return out
}
