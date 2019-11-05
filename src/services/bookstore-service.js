export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Book1',
      author: 'Susan',
      price: 32,
      coverImage: 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png',
    },
    {
      id: 2,
      title: 'Book2',
      author: 'Michael',
      price: 10,
      coverImage: 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png',
    },
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('Error!'));
      }, 700);
    });
  }
}
