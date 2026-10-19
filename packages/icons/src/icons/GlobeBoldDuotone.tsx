import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GlobeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c.4 0 .76.24.92.6.16.37.08.8-.2 1.09-4.67 4.94-4.67 12.68 0 17.62.28.3.36.72.2 1.09-.16.36-.52.6-.92.6-5.8 0-10.5-4.7-10.5-10.5S6.2 1.5 12 1.5M3.56 13c.4 3.44 2.86 6.25 6.12 7.18C8.23 17.99 7.43 15.5 7.26 13zm6.12-9.18C6.42 4.75 3.96 7.56 3.56 11h3.7c.17-2.51.97-5 2.42-7.18" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.54 1.51C18.09 1.8 22.5 6.38 22.5 12s-4.41 10.2-9.96 10.49l-.54.01c.4 0 .76-.24.92-.6.16-.37.08-.8-.2-1.09q-.38-.4-.72-.84c1.63-2.05 2.54-4.49 2.74-6.97H9.26q-.08-1 0-2h5.48c-.2-2.48-1.1-4.92-2.74-6.97q.34-.44.73-.84c.27-.3.35-.72.19-1.09-.14-.32-.43-.54-.77-.59L12 1.5zM16.74 13c-.17 2.51-.97 5-2.42 7.18 3.26-.93 5.72-3.74 6.12-7.18zm-2.42-9.18c1.45 2.19 2.25 4.67 2.42 7.18h3.7c-.4-3.44-2.86-6.25-6.12-7.18" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBoldDuotone.displayName = 'GlobeBoldDuotone';

// Triple export pattern
export { GlobeBoldDuotone, GlobeBoldDuotone as GlobeBoldDuotoneIcon, GlobeBoldDuotone as SiGlobeBoldDuotone };
export default GlobeBoldDuotone;
export type { GlobeBoldDuotoneProps };
