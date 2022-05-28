import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthorBooks = (item) => {
  clearDom();

  let domString = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <p class="card-text bold">${item.favorite ? '<button type="button" class="btn btn-warning">Favorite</button>' : ''}</p>
      <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
      <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
    </div>
  </div>`;

  item.bookObject.forEach((book) => {
    domString += `
      <div class="book-card">
        <img class="card-img-top" src=${book.image} alt=${book.title};">
        <div class="card-body";">
          <h5 class="card-title">${book.title}</h5>
            <p>${book.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
            $${book.price}` : `$${book.price}`}</p> 
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}"></i>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  renderToDOM('#view', domString);
};

export default viewAuthorBooks;
