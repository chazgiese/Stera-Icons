import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeFillDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope-fill-duotone" {...props}>
      <path d="M12.1 12q.38.05.64.32A1 1 0 1 1 12 12zM6.4 11.93l-1.75.33a.25.25 0 0 1-.29-.18l-.43-1.63a.25.25 0 0 1 .15-.3l1.68-.59zM15.26 10.23v.04l-1.52.29a3 3 0 0 0-1.26-.52l-.16-.02-.16-.02H12a3 3 0 0 0-1.29.3 3 3 0 0 0-1.13.93l-.09.12-1.13.21-.71-2.67 6.62-2.33zM18.58 4.29c.13-.04.27.04.3.18l1.43 5.31a.25.25 0 0 1-.18.3l-1.69.46c-.6.16-.98-.22-1.22-.71l-1.04-3.86a1 1 0 0 1 .71-1.23z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.43-1.59 2.76l-1.69.45c-.86.23-1.74.06-2.43-.4l-1.6.3a3 3 0 0 1-.77 2.71l2.73 5.47a1 1 0 0 1-1.79.9l-2.73-5.47a3 3 0 0 1-.74 0l-2.74 5.47a1 1 0 0 1-1.79-.9l2.74-5.47.01.01c-.42-.43-.71-1-.81-1.62l-1.21.23-2.81.52a2.25 2.25 0 0 1-2.59-1.62l-.44-1.63a2.25 2.25 0 0 1 1.43-2.7l2.7-.96 8.35-2.94a3 3 0 0 1 1.9-1.56zM11.85 12A1 1 0 0 0 11 13a1 1 0 1 0 1.74-.68h-.01a1 1 0 0 0-.62-.31L12 12zm-7.77-1.86a.25.25 0 0 0-.15.3l.43 1.63q.08.2.29.18l1.74-.33-.63-2.37zm3.57-1.26.71 2.67 1.13-.2.02-.03.07-.1.06-.08.05-.06a3 3 0 0 1 .66-.6l.1-.06.08-.04.08-.05a3 3 0 0 1 .48-.2h.03l.18-.06h.04l.38-.07h.06L12 10h.2l.12.02.16.02h.01l.2.04h.03q.2.05.4.14l.05.02a3 3 0 0 1 .52.29q.02 0 .05.03l1.53-.29-.01-.04-.99-3.67zm10.93-4.6-1.69.45a1 1 0 0 0-.7 1.23l1.03 3.86a1 1 0 0 0 1.22.7l1.7-.45a.25.25 0 0 0 .17-.3l-1.42-5.31a.25.25 0 0 0-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFillDuotone.displayName = 'TelescopeFillDuotone';

// Triple export pattern (lucide-react style)
export { TelescopeFillDuotone, TelescopeFillDuotone as TelescopeFillDuotoneIcon, TelescopeFillDuotone as SiTelescopeFillDuotone };
export default TelescopeFillDuotone;
export type { TelescopeFillDuotoneProps };
