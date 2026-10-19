import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteSadBold = memo(
  forwardRef<SVGSVGElement, EmoteSadBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.5c1.21 0 2.34.33 3.27.9.47.29.62.9.33 1.37s-.9.62-1.37.33c-.6-.37-1.38-.6-2.23-.6s-1.62.23-2.23.6c-.47.3-1.08.14-1.37-.33s-.14-1.08.33-1.37c.93-.57 2.06-.9 3.27-.9M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadBold.displayName = 'EmoteSadBold';

// Triple export pattern
export { EmoteSadBold, EmoteSadBold as EmoteSadBoldIcon, EmoteSadBold as SiEmoteSadBold };
export default EmoteSadBold;
export type { EmoteSadBoldProps };
