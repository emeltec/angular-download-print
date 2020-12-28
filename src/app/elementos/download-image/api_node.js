


/* After routing the path you want ..*/
/* const getImage( req, res) {

 if (!req.params.file) {
   return res.status(httpStatus.badRequest).json({
     ok: false,
     msg: 'File param not found.'
   })
 }
 const absfile = path.join(STORE_ROOT_DIR,IMAGES_DIR, req.params.file);

 if (!fs.existsSync(absfile)) {
   return res.status(httpStatus.badRequest).json({
     ok: false,
     msg: 'File name not found on server.'
   })
 }
 res.sendFile(path.resolve(absfile));
} */
