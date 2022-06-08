package ru.vsu.cs.grocery.core.services;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import ru.vsu.cs.grocery.db.models.OrderItem;
import ru.vsu.cs.grocery.db.repository.OrderRepository;
import ru.vsu.cs.grocery.rest.models.Status;

import java.time.ZonedDateTime;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScheduleService {

//    private final OrderRepository orderRepository;
//
//    @Scheduled(fixedDelayString = "${fixedDelay.in.milliseconds}")
//    public void repeatOrders() {
//        List<OrderItem> orders = getVacantOrders();
//        List<OrderItem> recreatedOrders = orders.stream()
//            .map(o -> o.withStatus(Status.IN_PROGRESS))
//            .collect(Collectors.toList());
//        orderRepository.saveAll(recreatedOrders);
//    }
//
//    private List<OrderItem> getVacantOrders() {
//        var orders = orderRepository.findAllByStatusAndOrderIntervalIsNotNull(Status.CONFIRMED);
//        ZonedDateTime currentDate = ZonedDateTime.now();
//        List<OrderItem> repeatOrders = new LinkedList<>();
//        for(OrderItem order: orders) {
//            ZonedDateTime createDate = order.getDate();
//            Integer interval = order.getOrderInterval();
//            if (currentDate.isBefore(createDate.plusDays(interval))) {
//                repeatOrders.add(order);
//            }
//        }
//        return repeatOrders;
//    }

}
