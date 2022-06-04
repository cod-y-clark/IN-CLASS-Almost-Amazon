import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = '';
  let bookString = '';

  domString += `
  <div class="mt-5 d-flex flex-wrap">
    <div class="text-white ms-5 details">
      <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="iconify" data-icon="typcn:star" style="color: goldenrod;" data-width="20" data-height="20"></span> Favorite Author' : ''}</h5>
      Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
      <div class="mt-5">
       <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
      <hr>
      <h5>Books</h5>`;

  obj.books.forEach((item) => {
    bookString += `
      <div id="authorBooksCard" class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  renderToDOM('#view', domString);
  renderToDOM('#view2', bookString);
};

export default viewAuthor;
