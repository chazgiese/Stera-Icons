import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandbagBoldProps = Omit<IconBaseProps, 'children'>;

const HandbagBold = memo(
  forwardRef<SVGSVGElement, HandbagBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v1.04q.66.05 1.2.27a4 4 0 0 1 1.66 1.3c.51.68.72 1.57 1.02 2.78l.6 2.4q.39 1.49.56 2.48c.1.67.13 1.3-.06 1.91a4 4 0 0 1-1.75 2.24c-.55.33-1.17.46-1.84.52q-1 .07-2.54.06h-7.7q-1.54.02-2.54-.06a4 4 0 0 1-1.84-.52 4 4 0 0 1-1.75-2.24 4 4 0 0 1-.06-1.91q.17-1 .56-2.48l.6-2.4c.3-1.2.5-2.1 1.02-2.79a4 4 0 0 1 1.65-1.29Q6.34 8.1 7 8.04V7a5 5 0 0 1 5-5m-3.25 8c-1.43 0-1.86.02-2.18.16a2 2 0 0 0-.83.64c-.21.28-.33.69-.68 2.08l-.6 2.4a30 30 0 0 0-.52 2.3c-.09.55-.07.82 0 1.01a2 2 0 0 0 .87 1.12c.16.1.43.19.98.24.56.05 1.3.05 2.36.05h7.7c1.07 0 1.8 0 2.36-.05s.82-.14.98-.24a2 2 0 0 0 .88-1.12c.06-.19.08-.46 0-1.01-.1-.56-.27-1.27-.53-2.3l-.6-2.4c-.35-1.4-.47-1.8-.68-2.08a2 2 0 0 0-.83-.64c-.32-.14-.75-.16-2.18-.16zM12 4a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagBold.displayName = 'HandbagBold';

// Triple export pattern (lucide-react style)
export { HandbagBold, HandbagBold as HandbagBoldIcon, HandbagBold as SiHandbagBold };
export type { HandbagBoldProps };
