    // Get the book ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

// Function to render the book details based on the book ID
function displayBookDetails(id) {
  const books = [
    {
      id: 1,
      title: "Beyond Intelligence",
      image: "images/book1.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 2,
      title: "Brand Control",
      image: "images/book2.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 3,
      title: "Creative Thinking",
      image: "images/book3.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 4,
      title: "Drive",
      image: "images/book4.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 5,
      title: "Help! My Chocolate is Melting",
      image: "images/book5.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 6,
      title: "I Wale",
      image: "images/book6.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 7,
      title: "I Wale II",
      image: "images/book7.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 8,
      title: "Limitless",
      image: "images/book8.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 9,
      title: "Mega Thinking",
      image: "images/book9.jpg",
      price: "Ksh 1,200.00",
      stars: 4.5
    },
    {
      id: 10,
      title: "Mental Independence",
      image: "images/book10.jpg",
      price: "Ksh 1,200.00",
      stars: 4.5
    },
    {
      id: 11,
      title: "Success Mindset",
      image: "images/book11.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 12,
      title: "The Growth Mindset",
      image: "images/book12.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 13,
      title: "Innovation Leadership",
      image: "images/book13.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    },
    {
      id: 14,
      title: "Leadership Excellence",
      image: "images/book14.jpg",
      price: "Ksh 1,200.00",
      stars: 5
    }
  ];

      // Find the book that matches the ID
      const book = books.find(b => b.id === parseInt(id));

      if (book) {
        const bookDetailHTML = `
          <div class="featured-book-item">
            <img src="${book.image}" alt="${book.title}" class="featured-book-image" />
            <div class="featured-book-details">
              <h3 class="featured-book-title">${book.title}</h3>
              <div class="featured-book-stars">
                ${'<i class="fas fa-star"></i>'.repeat(book.stars)}
              </div>
              <p class="featured-book-price">${book.price}</p>
              <a href="javascript:void(0);" class="featured-ctab-button" onclick="addToCart('${book.title}', ${book.price.replace('Ksh ', '').replace(',', '')})">Add to Cart</a>
            </div>
          </div>
        `;

        document.querySelector('.book-detail-container').innerHTML = bookDetailHTML;
      } else {
        // If no book found, show an error message
        document.querySelector('.book-detail-container').innerHTML = '<p>Book not found.</p>';
      }
    }

    // Call the function to display the book
    if (bookId) {
      displayBookDetails(bookId);
    } else {
      document.querySelector('.book-detail-container').innerHTML = '<p>No book ID provided.</p>';
    }