import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PushPinAltBoldProps = Omit<IconBaseProps, 'children'>;

const PushPinAltBold = memo(
  forwardRef<SVGSVGElement, PushPinAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.13 2.15a2.2 2.2 0 0 1 3.13 0l6.6 6.6a2.21 2.21 0 0 1-2.27 3.65l-.63-.2a.3.3 0 0 0-.26.05l-2.44 2.45a.3.3 0 0 0-.07.22l.43 2.15c.15.74-.08 1.5-.62 2.03l-.72.72c-.87.88-2.3.88-3.18 0l-3.25-3.25-3.45 3.45a1 1 0 0 1-1.41-1.42l3.44-3.45-3.25-3.25a2.25 2.25 0 0 1 0-3.18L4.9 8c.53-.53 1.3-.77 2.03-.62l2.15.43q.13.03.23-.07l2.44-2.44a.3.3 0 0 0 .06-.25l-.21-.64c-.27-.8-.06-1.67.53-2.26m1.71 1.41a.21.21 0 0 0-.35.22l.21.63c.27.81.06 1.7-.54 2.3l-2.44 2.45c-.53.53-1.3.76-2.03.61l-2.15-.43a.3.3 0 0 0-.23.07l-.72.72c-.1.1-.1.26 0 .35l7.93 7.93c.1.1.25.1.35 0l.72-.72a.3.3 0 0 0 .07-.23l-.43-2.15c-.15-.73.08-1.5.61-2.03l2.45-2.44c.6-.6 1.49-.81 2.3-.54l.63.2q.13.04.22-.04a.2.2 0 0 0 0-.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

PushPinAltBold.displayName = 'PushPinAltBold';

export { PushPinAltBold };
export type { PushPinAltBoldProps };
