import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M10.38 9.75a1.37 1.37 0 1 1-2.75 0 1.37 1.37 0 0 1 2.75 0M16.38 9.75a1.37 1.37 0 1 1-2.75 0 1.37 1.37 0 0 1 2.74 0M12 14c.88 0 1.65.1 2.2.36q.39.18.6.46.19.27.2.68-.01.41-.2.68-.21.27-.6.46c-.55.25-1.32.36-2.2.36s-1.65-.1-2.2-.36a1.5 1.5 0 0 1-.6-.46q-.19-.27-.2-.68.01-.41.2-.68.21-.27.6-.46c.55-.25 1.32-.36 2.2-.36" />
    </IconBase>
  ))
);

EmoteSurprisedRegularDuotone.displayName = 'EmoteSurprisedRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedRegularDuotone, EmoteSurprisedRegularDuotone as EmoteSurprisedRegularDuotoneIcon, EmoteSurprisedRegularDuotone as SiEmoteSurprisedRegularDuotone };
export default EmoteSurprisedRegularDuotone;
export type { EmoteSurprisedRegularDuotoneProps };
