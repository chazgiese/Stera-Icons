import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSurprisedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.25c1.1 0 2.05.12 2.73.42q.5.21.76.54.26.31.26.79-.01.48-.26.8-.25.31-.76.53c-.68.3-1.64.42-2.73.42-1.1 0-2.05-.12-2.73-.42a2 2 0 0 1-.76-.54 1.2 1.2 0 0 1-.26-.79q.01-.48.26-.8.25-.31.76-.53c.68-.3 1.64-.42 2.73-.42M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSurprisedRegularDuotone.displayName = 'EmoteSurprisedRegularDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedRegularDuotone, EmoteSurprisedRegularDuotone as EmoteSurprisedRegularDuotoneIcon, EmoteSurprisedRegularDuotone as SiEmoteSurprisedRegularDuotone };
export type { EmoteSurprisedRegularDuotoneProps };
