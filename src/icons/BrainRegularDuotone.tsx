import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrainRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.71 1.25h.05l.13.02h.1l.12.02.06.01.39.08.03.01.26.08q.04 0 .08.03l.27.1.06.03q.29.14.55.3l.03.02.25.18.03.02q.4.3.7.7l.02.02q.53.68.76 1.53a4.25 4.25 0 0 1 2.63 6.12q.33.3.6.68l.04.05.31.5.07.12a5 5 0 0 1 .27.68l.02.07a5 5 0 0 1 .15.63v.06a5 5 0 0 1 .05 1.02v.07l-.1.65-.03.08-.08.3-.02.04-.1.28-.01.05-.13.28-.04.07-.12.22-.03.06q-.26.44-.6.8l-.04.04q-.72.76-1.71 1.15A4.75 4.75 0 0 1 12 21.68a4.75 4.75 0 0 1-7.73-3.26 4.8 4.8 0 0 1-2.35-2l-.03-.05-.13-.23-.03-.05-.13-.3-.01-.03-.11-.3-.01-.03-.08-.3-.02-.08a5 5 0 0 1-.1-.65v-.07a5 5 0 0 1 0-.67v-.07a5 5 0 0 1 .2-1v-.03l.1-.3.05-.1.09-.2.03-.07.15-.27.05-.08.34-.5.08-.09.1-.12.26-.27q.03 0 .04-.04A4.23 4.23 0 0 1 5.4 4.4v-.02q.1-.33.23-.64v-.01l.15-.3.03-.03q.15-.28.35-.52l.02-.04.2-.22.03-.04.19-.18.05-.05.22-.19.04-.03.25-.18.02-.01q.27-.18.56-.31l.06-.03.24-.1.06-.01.05-.02.26-.08h.03l.38-.09h.07l.12-.02.1-.01.13-.01h.05a4.3 4.3 0 0 1 2.71.8 4.2 4.2 0 0 1 2.71-.8m-.21 1.5c-.77 0-1.46.32-1.96.83a.75.75 0 0 1-1.08 0 2.75 2.75 0 0 0-4.6 2.71.75.75 0 0 1-1.43.42 4 4 0 0 1-.14-.68 2.75 2.75 0 0 0-1.27 3.65l.2-.08a.75.75 0 0 1 .56 1.39 3.25 3.25 0 0 0 .4 6.16h.01a3 3 0 0 0 1.62 0 .75.75 0 0 1 .38 1.45q-.57.15-1.19.15h-.16a3.25 3.25 0 0 0 5.6 1.4l.05-.06a.75.75 0 0 1 1.07.06 3.24 3.24 0 0 0 5.6-1.4H18q-.6 0-1.19-.15a.75.75 0 0 1 .38-1.45 3 3 0 0 0 1.61 0h.01a3.3 3.3 0 0 0 2.32-2.3l.02-.05A3.25 3.25 0 0 0 19.22 11a.75.75 0 0 1 .56-1.4l.2.1a2.73 2.73 0 0 0-1.27-3.66q-.04.36-.14.68a.75.75 0 0 1-1.43-.42 2.75 2.75 0 0 0-2.64-3.54" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.75 10c0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25v4.34l-.19-.2a.75.75 0 0 0-1.07-.05l-.05.06-.19.2V16c0-1.24-1-2.25-2.25-2.25a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25V3.38l.21.2a.75.75 0 0 0 1.08 0l.21-.2z" />
    </IconBase>
  ))
);

BrainRegularDuotone.displayName = 'BrainRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrainRegularDuotone, BrainRegularDuotone as BrainRegularDuotoneIcon, BrainRegularDuotone as SiBrainRegularDuotone };
export type { BrainRegularDuotoneProps };
