import Response from "../utils/Response";
import HttpStatus from "http-status";
import axios from "axios";

class AlbumController {
  static getAlbumById = async (req, res) => {
    const { albumId } = req.params;
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;

    const config = {
      method: "get",
      url: url,
      headers: {},
    };

    const response = await axios(config);

    if (!response.data) return null;

    const album = response.data.map((data) => ({
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnailUrl,
    }));

    Response.successMessage(res, "Album is ready!", album, HttpStatus.OK);
  };
}

export default AlbumController;
