export const testServerResponse = { 
  user_id: 'user123',
}

export const testData = { 
  signUp: {
    name: 'test',
    email: 'test@gmail.com',
    plan: 'free',
    signup_source: 'web',
  },
  login: {
    email: 'test@gmail.com',
  },
  purchaseProduct: {
    name: 'black t-shirt',
    value: 200,
    quantity: 2,
  },
  selectProduct: {
    name: 'white pant',
    value: 200,
    color: 'white',
    isFeatured: true,
  },
  likeArticle: {
    articleName: 'Future of headless CMS',
    articleId: 'art102300',
    author: 'contentstack',
  },
  shareArticle: {
    articleName: 'Future of headless CMS',
    articleId: 'art102300',
    author: 'contentstack',
    platform: 'facebook',
  },
  bookmarkArticle: {
    articleName: 'Future of headless CMS',
    articleId: 'art102300',
    author: 'contentstack',
  },
}
