import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { useMemo, useRef } from 'react';
import { imageupload } from '../utils/constants';
type Props = {
  content: string;
  handleChanges: ({ value, name }: { name: string; value: string }) => void;
};
const RichTextEditor = ({ content, handleChanges }: Props) => {
  const quillRef = useRef();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const imageHandler = (e: unknown) => {
    if (quillRef.current) {
      const editor = (quillRef.current as ReactQuill).getEditor();
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) {
          return;
        } else if (!/^image\//.test(file.type)) {
          toast.error('You could only upload images.');
        } else if (file.size > 1024 * 1024) {
          toast.error('Image size must be less than 1 MB.');
        } else {
          const res = await imageupload(file); // upload data into server or aws or cloudinary
          const url = res.urls[0].url;
          editor.insertEmbed(
            editor.getSelection() as unknown as number,
            'image',
            url
          );
        }
      };
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['image', 'link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  return (
    <div className="form-group">
      <label htmlFor="title">Content</label>
      <ReactQuill
        theme="snow"
        modules={modules}
        className="quill"
        placeholder="Tell us your story..."
        value={content}
        ref={quillRef as unknown as React.RefObject<ReactQuill>}
        onChange={(value) => handleChanges({ name: 'content', value })}
      />
    </div>
  );
};

export default RichTextEditor;
