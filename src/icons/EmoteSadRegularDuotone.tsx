import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.75a6 6 0 0 1 3.14.86.75.75 0 1 1-.78 1.28 4.5 4.5 0 0 0-2.36-.64q-1.37.02-2.36.64a.75.75 0 1 1-.78-1.28 6 6 0 0 1 3.14-.86M9 8.38a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M15 8.38a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

EmoteSadRegularDuotone.displayName = 'EmoteSadRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadRegularDuotone, EmoteSadRegularDuotone as EmoteSadRegularDuotoneIcon, EmoteSadRegularDuotone as SiEmoteSadRegularDuotone };
export default EmoteSadRegularDuotone;
export type { EmoteSadRegularDuotoneProps };
