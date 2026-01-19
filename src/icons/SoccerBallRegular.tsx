import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerBallRegularProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegular = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25q1.9.01 3.6.62a10.75 10.75 0 0 1 7.12 10.84l.2.16-.23.29c-.2 1.85-.87 3.55-1.88 5v.1h-.07a10.8 10.8 0 0 1-5.68 4.04l-.07.19-.24-.1a11 11 0 0 1-5.5 0l-.24.1-.07-.19a10.8 10.8 0 0 1-5.68-4.04H3.2v-.1a11 11 0 0 1-1.88-5l-.23-.29.2-.16-.03-.71c0-4.67 2.98-8.64 7.14-10.13h.01q1.7-.61 3.6-.62m-1.62 14.5L8.8 17.94l1.26 3.1a9 9 0 0 0 3.9 0l1.26-3.1-1.6-2.19zm6.2 2.8-.76 1.87a9 9 0 0 0 2.85-2.02zM5.33 18.4q1.21 1.27 2.85 2.02l-.76-1.87zm-2.48-5.06a9 9 0 0 0 1.25 3.47l3.48.25 1.56-2.16-1.2-2.8-2.6-.84zm13.2-1.23-1.2 2.8 1.57 2.15 3.48-.25a9 9 0 0 0 1.25-3.47l-2.48-2.08zm-6.64-.4 1.08 2.54h3.02l1.08-2.54L12 9.5zm-5.66-3.9a9 9 0 0 0-.98 3.65l1.56-1.32zm15.92 2.33 1.56 1.32a9 9 0 0 0-.98-3.64zM8.25 3.54a9 9 0 0 0-3.38 2.57l.93 3.72 2.53.83 2.92-2.5V5.41zm4.5 1.88v2.73l2.92 2.5 2.53-.82.93-3.72a9 9 0 0 0-3.38-2.57zM12 2.75a9 9 0 0 0-1.88.19L12 4.12l1.88-1.18A9 9 0 0 0 12 2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegular.displayName = 'SoccerBallRegular';

// Triple export pattern (lucide-react style)
export { SoccerBallRegular, SoccerBallRegular as SoccerBallRegularIcon, SoccerBallRegular as SiSoccerBallRegular };
export default SoccerBallRegular;
export type { SoccerBallRegularProps };
