import './App.css'

import React from 'react'

import CarDTO from "@iagows/business-data/src/model/CarDTO"
import BodyDTO from '@iagows/business-data/src/model/BodyDTO'
import CarPartsDTO from '@iagows/business-data/src/model/CarPartsDTO'
import PowerTrainsDTO from '@iagows/business-data/src/model/PowerTrainsDTO'
import CarAssemblyDTO from '@iagows/business-data/src/model/CarAssemblyDTO'

import { CarNode } from "@iagows/business-data/src/car/CarNode"
import { CarTypes } from "@iagows/business-data/src/car/CarTypes"

import {
  car,
  carAssembly,
  carParts,
  body,
  powerTrains
} from '@iagows/business-data/src/model/samples'

function App() {
  const _assembly = new CarAssemblyDTO().fromJSON(carAssembly)
  const _car = new CarDTO().fromJSON(car)
  const _parts = new CarPartsDTO().fromJSON(carParts)
  const _body = new BodyDTO().fromJSON(body)
  const _pt = new PowerTrainsDTO().fromJSON(powerTrains)

  const treeRoot = CarNode.create(CarTypes.CAR_ASSEMBLY, _assembly)
  const treeCar = CarNode.create(CarTypes.CAR, _car)
  const treeParts = CarNode.create(CarTypes.CAR_PARTS, _parts)
  const treeBody = CarNode.create(CarTypes.BODY, _body)
  const treePt = CarNode.create(CarTypes.POWER_TRAIN, _pt)

  treeParts.addChild(treeBody)
  treeParts.addChild(treePt)
  treeCar.addChild(treeParts)
  treeRoot.addChild(treeCar)

  console.log(treeRoot.toString())
  return (
    <div className="App">
      <header className="App-header">Check console</header>
    </div>
  )
}

export default App
