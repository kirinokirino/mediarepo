import {downloadDir} from "@tauri-apps/api/path";
import {dialog} from "@tauri-apps/api";
import {File} from "../../models/File";

export class FileHelper {

  /**
   * Opens a dialog to get a download location for the given file
   * @param {File} file
   */
  public static async getFileDownloadLocation(file: File): Promise<string | undefined> {
    let extension;

    if (file.mime_type) {
      extension = FileHelper.getExtensionForMime(file.mime_type);
    }
    const downloadDirectory = await downloadDir();
    const suggestionPath = downloadDirectory + file.hash + "." + extension;

    return await dialog.save({
      defaultPath: suggestionPath,
      filters: [{
        name: file.mime_type ?? "All",
        extensions: [extension ?? "*"]
      }, {name: "All", extensions: ["*"]}]
    })
  }

  /**
   * Returns the extension for a mime type
   * @param {string} mime
   * @returns {string | undefined}
   * @private
   */
  public static getExtensionForMime(mime: string): string | undefined {
    let parts = mime.split("/");

    if (parts.length === 2) {
      const type = parts[0];
      const subtype = parts[1];
      return FileHelper.convertMimeSubtypeToExtension(subtype);
    }
    return undefined;
  }

  private static convertMimeSubtypeToExtension(subtype: string): string {
    return subtype;
  }
}
