import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/carActions'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

  export const carReducer = (state = initialState, action) => {
      switch(action.type){
        case ADD_FEATURE:
            return {
                //Clone the original state
                ...state,
                //Update the additonal price
                additionalPrice: state.additionalPrice + action.payload.price,
                //Update the car prop
                car: {
                    //Clone the existing car obj
                    ...state.car,
                    //Clone the exisiting features and add the new one to the list
                    features: [...state.car.features, action.payload]
                },
                //Clone the existing additonal features list and remove the one we added to the features
                additionalFeatures: [...state.additionalFeatures.filter(item => item.id !== action.payload.id)]
            }

        case REMOVE_FEATURE:
            return {
                //Clone the original state
                ...state,
                //Update the additonal price
                additionalPrice: state.additionalPrice - action.payload.price,
                //Update the car prop
                car: {
                    //Clone the existing car obj
                    ...state.car,
                    //Clone the exisiting features and remove the one we clicked
                    features: [...state.car.features.filter(item => item.id !== action.payload.id)]
                },
                //Clone the existing additonal features list and add the one we removed from features
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }

        default:
            return state
      }
      
  }
