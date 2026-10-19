import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedRegular = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14c.88 0 1.65.1 2.2.36q.39.18.6.46.19.27.2.68-.01.41-.2.68-.21.27-.6.46c-.55.25-1.32.36-2.2.36s-1.65-.1-2.2-.36q-.39-.19-.6-.46-.19-.27-.2-.68.01-.41.2-.68.21-.27.6-.46c.55-.25 1.32-.36 2.2-.36M9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedRegular.displayName = 'EmoteSurprisedRegular';

// Triple export pattern
export { EmoteSurprisedRegular, EmoteSurprisedRegular as EmoteSurprisedRegularIcon, EmoteSurprisedRegular as SiEmoteSurprisedRegular };
export default EmoteSurprisedRegular;
export type { EmoteSurprisedRegularProps };
