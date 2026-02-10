import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareRegularProps = Omit<IconBaseProps, 'children'>;

const ImageSquareRegular = memo(
  forwardRef<SVGSVGElement, ImageSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square" {...props}>
      <path fill="currentColor" d="M15 7.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.35 9.07a.36.36 0 0 0-.5 0L4.76 15.3l.04.87c.05.62.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.89-.46 1.37-1.33l-2.59-2.59a.36.36 0 0 0-.5 0l-1.1 1.1c-.73.72-1.9.72-2.63 0zm2.15-7.57c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v2.79l1.93-1.94c.73-.72 1.91-.72 2.64 0l3.76 3.77c.14.14.37.14.5 0l1.1-1.1c.73-.72 1.91-.72 2.64 0l1.9 1.9c.03-.57.03-1.28.03-2.22v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareRegular.displayName = 'ImageSquareRegular';

// Triple export pattern (lucide-react style)
export { ImageSquareRegular, ImageSquareRegular as ImageSquareRegularIcon, ImageSquareRegular as SiImageSquareRegular };
export default ImageSquareRegular;
export type { ImageSquareRegularProps };
