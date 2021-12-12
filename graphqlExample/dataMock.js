/**
 * Estos son mis datos de prueba que tengo para no hacer una implementacion real
 * a una base de datos que no viene al caso con el ejemplo.
 */

const products = [
    { id: 1, id_type: 1, id_modality: 1 },
    { id: 2, id_type: 2, id_modality: 1 },
    { id: 2, id_type: 2, id_modality: 2 },
]

const modalitys = [
    { id: 1, name: 'Normal'},
    { id: 2, name: 'Urgente'},
]

const descriptions = [
    { id: 1, name: 'Paqueteria con retiro en domicilio' },
    { id: 2, name: 'Paqueteria con entrega en sucursal' },
]

const prices = [
    { id_type: 1, id_modality: 1, price: '1500.00'},
    { id_type: 2, id_modality: 1, price: '900.00'},
    { id_type: 2, id_modality: 2, price: '2500.00'}
]

module.exports = {
    products,
    modalitys,
    descriptions,
    prices
}