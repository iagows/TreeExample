export enum CarTypes {
  CAR_ASSEMBLY,
  CAR,
  CAR_PARTS,
  BODY,
  BODY_PARTS,
  ROOF,
  LEFT_FRONT_DOOR,
  BONNET,
  POWER_TRAIN,
  POWER_TRAIN_PARTS,
  ENGINE,
  ENGINE_PARTS,
  CYLINDER_HEAD,
  CYLINDER,
  CARTER,
  COUPLING,
  GEAR_BOX,
  REAR_AXLE,
  REAR_AXLE_PARTS,
  LEFT_REAR_WHEEL,
  RIGHT_REAR_WHEEL
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
