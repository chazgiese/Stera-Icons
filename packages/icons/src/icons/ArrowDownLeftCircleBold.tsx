import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftCircleBold = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.12 8.46c.4-.39 1.02-.39 1.42 0 .39.4.39 1.03 0 1.42l-3.95 3.95h3.24c.55 0 1 .45 1 1s-.45 1-1 1H9.17q-.41 0-.7-.3c-.2-.18-.3-.44-.3-.7V9.17c0-.55.45-1 1-1s1 .45 1 1v3.24z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownLeftCircleBold.displayName = 'ArrowDownLeftCircleBold';

// Triple export pattern
export { ArrowDownLeftCircleBold, ArrowDownLeftCircleBold as ArrowDownLeftCircleBoldIcon, ArrowDownLeftCircleBold as SiArrowDownLeftCircleBold };
export default ArrowDownLeftCircleBold;
export type { ArrowDownLeftCircleBoldProps };
