import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AngleRegularProps = Omit<IconBaseProps, 'children'>;

const AngleRegular = memo(
  forwardRef<SVGSVGElement, AngleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle" {...props}>
      <path fill="currentColor" d="M6 4.25a.75.75 0 0 1 .75.83v13.17H20a.75.75 0 0 1 .75.75c0 .41-.34.75-.75.75H6a.75.75 0 0 1-.75-.75V5c0-.41.34-.75.75-.75M19.48 15.15c.4-.1.81.16.9.56v.01a.75.75 0 0 1-1.46.33c-.1-.4.16-.81.56-.9M18.29 12.24a.75.75 0 0 1 1 .35v.01a.75.75 0 0 1-1.35.65.75.75 0 0 1 .35-1M16.47 9.68c.33-.26.8-.2 1.06.12a.75.75 0 1 1-1.17.94.75.75 0 0 1 .11-1.06M14.14 7.58a.75.75 0 0 1 1.05-.12l.01.01a.75.75 0 1 1-.94 1.17.75.75 0 0 1-.12-1.06M11.4 6.06a.75.75 0 1 1 .36 1h-.01a.75.75 0 0 1-.35-1M8.38 5.18a.75.75 0 1 1 .58.9h-.01a.75.75 0 0 1-.57-.9" />
    </IconBase>
  ))
);

AngleRegular.displayName = 'AngleRegular';

// Triple export pattern (lucide-react style)
export { AngleRegular, AngleRegular as AngleRegularIcon, AngleRegular as SiAngleRegular };
export default AngleRegular;
export type { AngleRegularProps };
