export const getFiltered = (text, items) => {
    if (!text) {
        return items
    }
    return items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
  }