import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalRegularProps = Omit<IconBaseProps, 'children'>;

const MedalRegular = memo(
  forwardRef<SVGSVGElement, MedalRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 1.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.82c0 .67 0 1.18-.15 1.64q-.2.59-.64 1.03c-.34.35-.8.57-1.4.87l-1.81.9v.04h-.07l-1.47.73a5.74 5.74 0 1 1-6.42 0l-1.47-.73h-.07v-.04l-1.82-.9c-.59-.3-1.05-.52-1.4-.87q-.43-.45-.63-1.03c-.16-.46-.15-.97-.15-1.64V5.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM12 12.75a4.25 4.25 0 1 0-.01 8.5 4.25 4.25 0 0 0 .01-8.5m-3.25-2.21 1.8.9h.01q.5-.14 1.04-.18h.8q.54.04 1.05.18l1.8-.9V2.75h-6.5zM7.2 2.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.82a4 4 0 0 0 .07 1.15q.1.27.29.47a4 4 0 0 0 1 .57l1.14.58V2.75zm9.55 7.04 1.15-.58a4 4 0 0 0 1-.57q.19-.2.28-.47a4 4 0 0 0 .07-1.15V5.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54 1 1 0 0 0-.52-.12c-.3-.02-.68-.02-1.25-.02h-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalRegular.displayName = 'MedalRegular';

// Triple export pattern (lucide-react style)
export { MedalRegular, MedalRegular as MedalRegularIcon, MedalRegular as SiMedalRegular };
export default MedalRegular;
export type { MedalRegularProps };
