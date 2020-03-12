export default function priceFormater(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}