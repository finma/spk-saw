import axios from "axios";

export const getAllAlternatif = async () => {
  const url = `http://localhost:3000/api/alternatif`;
  const res = await axios({ url, method: "GET" }).catch((err) => {
    return err.response;
  });

  return res.data;
};

export const getAlternatifById = async (id) => {
  const url = `http://localhost:3000/api/alternatif/${id}`;
  const res = await axios({ url, method: "GET" }).catch((err) => {
    return err.response;
  });

  return res.data;
};

export const updateAlternatif = async (id, data) => {
  const url = `http://localhost:3000/api/alternatif/${id}/update`;
  const res = await axios({ url, method: "PUT", data }).catch((err) => {
    return err.response;
  });

  return res.data;
};

export const createAlternatif = async (data) => {
  const url = `http://localhost:3000/api/alternatif`;
  const res = await axios({ url, method: "POST", data }).catch((err) => {
    return err.response;
  });

  return res.data;
};

export const deleteAlternatif = async (id) => {
  const url = `http://localhost:3000/api/alternatif/${id}/delete`;
  const res = await axios({ url, method: "DELETE" }).catch((err) => {
    return err.response;
  });

  return res.data;
};
