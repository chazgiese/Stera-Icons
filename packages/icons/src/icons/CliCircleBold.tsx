import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CliCircleBold = memo(
  forwardRef<SVGSVGElement, CliCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.3 8.3c.38-.4 1.02-.4 1.4 0l3 3q.3.28.3.7t-.3.7l-3 3c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L9.58 12l-2.3-2.3c-.39-.38-.39-1.02 0-1.4M16.5 14c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleBold.displayName = 'CliCircleBold';

// Triple export pattern
export { CliCircleBold, CliCircleBold as CliCircleBoldIcon, CliCircleBold as SiCliCircleBold };
export default CliCircleBold;
export type { CliCircleBoldProps };
