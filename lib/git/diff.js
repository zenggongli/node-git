  var _a_blob = !a_blob || a_blob.match(/^0{40}$/) ? null : new Blob(repo, a_blob);
  var _b_blob = !b_blob || b_blob.match(/^0{40}$/) ? null : new Blob(repo, b_blob);
  var _new_file = new_file || _a_blob == null;
  var _deleted_file = deleted_file || _b_blob == null;
  // Ensure we don't have white space at the end
  text = text.trim();
  // Split the text into lines
      parts = lines.shift().match(/^index ([0-9A-Fa-f]+)\.\.([0-9A-Fa-f]+) ?(.+)?$/);      