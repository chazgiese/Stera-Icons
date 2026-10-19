import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteSadRegular = memo(
  forwardRef<SVGSVGElement, EmoteSadRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.75c1.17 0 2.25.32 3.14.86.36.22.47.68.25 1.03-.22.36-.68.47-1.03.25q-1-.62-2.36-.64-1.37.02-2.36.64c-.35.22-.81.1-1.03-.25s-.1-.81.25-1.03c.89-.54 1.97-.86 3.14-.86M9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadRegular.displayName = 'EmoteSadRegular';

// Triple export pattern
export { EmoteSadRegular, EmoteSadRegular as EmoteSadRegularIcon, EmoteSadRegular as SiEmoteSadRegular };
export default EmoteSadRegular;
export type { EmoteSadRegularProps };
