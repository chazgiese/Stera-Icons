import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PhoneOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 10.79c.71 0 2.02-.06 3.1.1.55.09 1.13.24 1.6.54.5.32.88.83.88 1.55 0 .3-.03.68-.04.8v.14l.21.12c.23.1.6.23 1.19.39l-.38 1.45a9 9 0 0 1-1.45-.48q-.56-.24-.88-.75c-.2-.35-.2-.7-.19-.94.02-.3.04-.43.04-.73 0-.1-.03-.19-.2-.3q-.3-.19-1-.3c-.94-.14-2.06-.1-2.88-.1s-1.94-.04-2.88.1q-.7.11-1 .3c-.17.11-.2.2-.2.3 0 .3.03.42.04.73 0 .24 0 .6-.2.94q-.3.51-.87.75-.53.25-1.45.48l-.38-1.45c.6-.16.96-.28 1.19-.39q.19-.09.2-.12v-.15c0-.11-.03-.49-.03-.79 0-.72.38-1.23.88-1.55.47-.3 1.05-.45 1.6-.53 1.08-.17 2.39-.11 3.1-.11" opacity={.4} />
        <path fill="currentColor" d="M12 7.25a28 28 0 0 1 5.66.51c1.82.36 3.34 1 4.42 2a5.3 5.3 0 0 1 1.67 4.05c0 .52 0 1.25-.18 1.82-.1.3-.28.65-.63.88-.32.21-.7.27-1.06.23l-.15-.03h-.03l-.02-.01-3.12-.82.38-1.45 3.08.81.09.01.04-.09a5 5 0 0 0 .1-1.35c0-1.27-.43-2.23-1.2-2.95a7.4 7.4 0 0 0-3.68-1.62q-2.7-.52-5.36-.49h-.02q-2.66-.04-5.37.49a7.4 7.4 0 0 0-3.67 1.62 3.8 3.8 0 0 0-1.2 2.95 5 5 0 0 0 .1 1.35l.04.09.09-.01 3.08-.81.38 1.45-3.12.82H2.3l-.03.01a1.6 1.6 0 0 1-1.2-.2 1.6 1.6 0 0 1-.64-.88c-.19-.57-.18-1.3-.18-1.82q.02-2.5 1.67-4.04c1.08-1.01 2.6-1.65 4.42-2a28 28 0 0 1 5.65-.52z" />
    </IconBase>
  ))
);

PhoneOffRegularDuotone.displayName = 'PhoneOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { PhoneOffRegularDuotone, PhoneOffRegularDuotone as PhoneOffRegularDuotoneIcon, PhoneOffRegularDuotone as SiPhoneOffRegularDuotone };
export type { PhoneOffRegularDuotoneProps };
