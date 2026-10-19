import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 11.88c-1.19 0-2.3.32-3.2.87-.42.26-.55.8-.3 1.2.26.42.8.55 1.2.3q.96-.6 2.3-.62 1.34.02 2.3.62c.4.25.94.12 1.2-.3.25-.4.12-.94-.3-1.2-.9-.55-2.01-.87-3.2-.87M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.63c1.19 0 2.3.32 3.2.87.42.26.55.8.3 1.2-.26.42-.8.55-1.2.3q-.96-.6-2.3-.62-1.34.02-2.3.62c-.4.25-.94.12-1.2-.3-.25-.4-.12-.94.3-1.2.9-.55 2.01-.87 3.2-.87M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteSadFillDuotone.displayName = 'EmoteSadFillDuotone';

// Triple export pattern
export { EmoteSadFillDuotone, EmoteSadFillDuotone as EmoteSadFillDuotoneIcon, EmoteSadFillDuotone as SiEmoteSadFillDuotone };
export default EmoteSadFillDuotone;
export type { EmoteSadFillDuotoneProps };
