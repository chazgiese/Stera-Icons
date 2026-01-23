import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.75c1.3 0 2.49.43 3.45 1.15a.75.75 0 0 1-.9 1.2 4.2 4.2 0 0 0-5.1 0 .75.75 0 0 1-.9-1.2A5.7 5.7 0 0 1 12 13.75M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSadRegularDuotone.displayName = 'EmoteSadRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadRegularDuotone, EmoteSadRegularDuotone as EmoteSadRegularDuotoneIcon, EmoteSadRegularDuotone as SiEmoteSadRegularDuotone };
export default EmoteSadRegularDuotone;
export type { EmoteSadRegularDuotoneProps };
