const posts = [
  {
    title: "Post 1",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: "id1",
  },
  {
    title: "Post 2",
    date: new Date(),
    views: 24,
    comments: [1, 2, 3],
    _id: "id2",
  },
];

export const store = () => ({});

export const actions = {
  async fetchAdmin() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async fetchAdminById({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((p) => p._id === id));
      }, 1000);
    });
  },
  async remove({ commit }) {},
  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("text", text);
      fd.append("image", image, image.name);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async update({}, { title, text, image }) {},
};
