import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutesService {
    findAll(): object[] {
        return [
            {
                title: 'first route',
                length: '10',
                quantity: '8'

            }
        ];
    }
}
