import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareRegularProps = Omit<IconBaseProps, 'children'>;

const ImageSquareRegular = memo(
  forwardRef<SVGSVGElement, ImageSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square" {...props}>
      <path d="M15 7.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07zm-4.25 9.57a.36.36 0 0 0-.5 0l-3.22 3.21-.21.21c.06.78.18 1.28.4 1.69.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4a4 4 0 0 0 1.64-1.48l-2.82-2.82a.36.36 0 0 0-.5 0l-1.1 1.1c-.73.72-1.9.72-2.63 0zm3.25-8.07c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2.18l2.43-2.43c.73-.72 1.91-.72 2.64 0l3.76 3.77c.14.14.37.14.5 0l1.1-1.1c.73-.72 1.91-.72 2.64 0l2.3 2.31q.05-.23.06-.5c.07-.8.07-1.82.07-3.23v-1c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareRegular.displayName = 'ImageSquareRegular';

// Triple export pattern (lucide-react style)
export { ImageSquareRegular, ImageSquareRegular as ImageSquareRegularIcon, ImageSquareRegular as SiImageSquareRegular };
export default ImageSquareRegular;
export type { ImageSquareRegularProps };
