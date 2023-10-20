import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export class UploadService {
  public uploadImage(image: any) {
    try {
      if (!image) throw new Error('Image not uploaded')

      let filesName = image[0].originalname
      let filesPath = image[0].path
      let oldPath = path.join(__dirname, '../../../' + filesPath)

      let fileExtension = path.extname(image[0].originalname)
      filesName = `${uuidv4()}${fileExtension}`

      let newPath = path.join(__dirname, '../../../public/img/' + filesName)
      let dir = path.join(__dirname, '../../../../public/img/')

      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

      fs.rename(oldPath, newPath, async (err) => {
        if (err) throw err
        else fs.unlink(oldPath, (err) => {})
      })

      return `/img/${filesName}`
    } catch (error) {
      throw error
    }
  }

  public uploadVideo(video: any) {
    try {
      if (!video) throw new Error('Video not uploaded')

      let filesName = video[0].originalname
      let filesPath = video[0].path
      let oldPath = path.join(__dirname, '../../../' + filesPath)

      let fileExtension = path.extname(video[0].originalname)
      filesName = `${uuidv4()}${fileExtension}`

      let newPath = path.join(__dirname, '../../../public/video/' + filesName)
      let dir = path.join(__dirname, '../../../../public/video/')

      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

      fs.rename(oldPath, newPath, async (err) => {
        if (err) throw err
        else fs.unlink(oldPath, (err) => {})
      })

      return { message: '', result: `/video/${filesName}` }
    } catch (error) {
      throw error
    }
  }

  public async uploadImageMany(image: any) {
    try {
      if (!image.length === null) {
      }

      let imageResult = []
      for (const images of image) {
        let filesName = images.originalname
        let filesPath = images.path
        let oldPath = path.join(__dirname, '../../../' + filesPath)

        let fileExtension = path.extname(images.originalname)
        filesName = `${uuidv4()}${fileExtension}`

        let newPath = path.join(__dirname, '../../../public/img/' + filesName)
        let dir = path.join(__dirname, '../../../../public/img')

        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

        fs.rename(oldPath, newPath, async (err) => {
          if (err) throw err
          else fs.unlink(oldPath, (err) => {})
        })

        imageResult.push(`/img/${filesName}`)
      }

      return { message: '', result: imageResult }
    } catch (error) {
      throw error
    }
  }
}
